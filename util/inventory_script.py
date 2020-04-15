import csv
import json
import time
# https://github.com/discogs/discogs_client (Node.js image/video collection possible)
import discogs_client

d = discogs_client.Client('ExampleApplication/0.1',
                          user_token="YsLpfCxaLIMiCtRSzHyQfIjsnWoOQNJpzrJeWOLK")

########### API RESOURCE CHECK SCRATCH WORK ###########
# release = d.release(249504)
# master = release.master
# print ()
# # video_data = release.videos[0]
# # image_url = image_data.get("resource_url")
# # print (video_data)
#######################################################

# open raw .csv data file
with open('test.csv') as csv_file:
    csv_reader = csv.DictReader(csv_file, ('listing_id', 'artist', 'title',
                                           'label', 'catno', 'format', 'release_id', 'status', 'price'), 'extra')
    line_count = 1
    image_error_count = 0
    video_error_count = 0
    write_error_count = 0

    with open('parsed.json', 'w') as out_file:

        #skip the headers
        csv_reader.__next__()

        # iterate row by row
        for row in csv_reader:
            
            #sleep so we don't overwhelm api
            time.sleep(1.5)
            print(line_count)

            dict_from_csv = row
            # delete extra fields
            del dict_from_csv['catno']
            del dict_from_csv['extra']
            # get release from discogs api
            release = d.release(dict_from_csv['release_id'])
            # get image_url
            try:
                image_url = release.images[0].get("resource_url")
            except:
                image_url = None
                print("IMAGE ERROR ON LINE " + str(line_count))
                image_error_count += 1
            finally:
                dict_from_csv['image_url'] = image_url
            # get video_url
            try:
                video_url = release.videos[0].url
            except:
                video_url = None
                print("VIDEO ERROR ON LINE " + str(line_count))
                video_error_count += 1
            finally:
                dict_from_csv['video_url'] = video_url
            # get styles
            dict_from_csv['styles'] = release.styles
            # add staff pick field
            dict_from_csv['staff_pick'] = False
            
            #convert to json
            json_from_csv = json.dumps(dict_from_csv)
            out_file.write(json_from_csv)
            out_file.write('\n')
            line_count += 1

# Caught error summary
print("Image Errors: " + str(image_error_count))
print("Video Errors: " + str(video_error_count))
