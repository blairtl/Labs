from __future__ import print_function
import os, sys
from PIL import ImageFilter
from PIL import Image
im = Image.open(%% PLACE IMAGE HERE %%)

#This shows the image
im.show()

#This shows attributes about the image file
print(im.format, im.size, im.mode)


#This creates a JPEG Thumbnail, or responds with an error if not possible
size = (128, 128)

for infile in sys.argv[1:]:
    outfile = os.path.splitext(infile)[0] + ".thumbnail"
    if infile != outfile:
        try:
            im = Image.open(infile)
            im.thumbnail(size)
            im.save(outfile, "JPEG")
        except IOError:
            print("cannot create thumbnail for", infile)

#This resizes the image
out = im.resize((128, 128))

#This rotates the image by 45 degrees counter-clockwise
out = im.rotate(45) 

#This applies the detail filter
out = im.filter(ImageFilter.DETAIL)

