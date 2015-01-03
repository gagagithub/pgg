class AddP2donateToUserIdeaships < ActiveRecord::Migration
  def change
    add_column :user_ideaships, :p2donate, :integer
  end
end
