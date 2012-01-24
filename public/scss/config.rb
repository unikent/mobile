# Delineate the directory for our SASS/SCSS files (this directory)
sass_path = "."
 
# Delineate the CSS directory (under resources/css in this demo)
css_path = "../css"
 
# Delinate the images directory
images_dir = "../images"
 
# Load the sencha-touch framework
load File.join(sass_path, '..', 'vendor', 'sencha', 'resources', 'themes')
 
# Specify the output style/environment
output_style = :compressed
environment = :production