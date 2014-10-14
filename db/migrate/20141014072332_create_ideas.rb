class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.integer :user_id
      t.string :intro
      t.text :customer_segments
      t.text :customer_relationships
      t.text :value_proposition
      t.text :key_activities
      t.text :key_partners
      t.text :channels
      t.text :key_resources
      t.text :revenue_streams
      t.text :cost_structure

      t.timestamps
    end
  end
end
