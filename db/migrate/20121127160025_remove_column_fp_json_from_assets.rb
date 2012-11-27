class RemoveColumnFpJsonFromAssets < ActiveRecord::Migration
  def change
    remove_column :assets, :fp_json
  end
end
