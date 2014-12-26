class CreateChangjingzans < ActiveRecord::Migration
  def change
    create_table :changjingzans do |t|
      t.integer :user_id
      t.integer :idea_id
      t.integer :comments_id
      t.integer :zan

      t.timestamps
    end
  end
end
