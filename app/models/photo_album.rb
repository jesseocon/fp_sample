class PhotoAlbum < ActiveRecord::Base
  attr_accessible :name
  has_many :assets, as: :attachable
end
