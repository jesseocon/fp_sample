class AddJsonToAssets < ActiveRecord::Migration
  def change
    add_column :assets, :fp_json, :text
  end
end
