class Asset < ActiveRecord::Base
  attr_accessible :attachable_id, :attachable_type, :fpurl, :fp_filename
  belongs_to :attachable, polymorphic: true
end
