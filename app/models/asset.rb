class Asset < ActiveRecord::Base
  attr_accessible :attachable_id, :attachable_type, :fpurl, :fp_filename,
                  :fp_mimetype, :fp_isWriteable, :fp_size
  belongs_to :attachable, polymorphic: true
  
  default_scope order: "assets.created_at ASC"
  
end
