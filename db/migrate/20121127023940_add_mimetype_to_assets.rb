class AddMimetypeToAssets < ActiveRecord::Migration
  def change
    add_column :assets, :fp_mimetype, :string
    add_column :assets, :fp_size, :float
    add_column :assets, :fp_isWriteable, :boolean
  end
end
