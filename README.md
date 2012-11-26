filepicker.io sample
====================

This mini application is intended to give users a quick example of how
Filepicker.io can be utilized for file uploads from either local storage or 
from a variety of cloud storage service providers.  

Installation
------------

Run bundle install

Migrate the database

Get an API Key from [Filepicker.io](http://filepicker.io) and set up 
your s3 credentials

add your API Key to line 5 of app/assets/javascripts/assets.js -- filepicker.setKey('YOURKEY-GOES-HERE');

remove line 2 of app/assets/javascripts/assets.js --var apiKey = $("body").data('filepicker-key') --









