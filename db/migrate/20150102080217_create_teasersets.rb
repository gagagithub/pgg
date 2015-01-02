class CreateTeasersets < ActiveRecord::Migration
  def change
    create_table :teasersets do |t|
      t.integer :idea_id
      t.integer :inviter_id
      t.integer :phone
      t.string :email

      t.timestamps
    end
  end
end
