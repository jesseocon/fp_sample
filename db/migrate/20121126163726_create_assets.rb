class CreateAssets < ActiveRecord::Migration
  def change
    create_table :assets do |t|
      t.integer :attachable_id
      t.string :attachable_type
      t.string :fpurl
      t.string :fp_filename

      t.timestamps
    end
    add_index :assets, [:attachable_id, :attachable_type]
  end
end
