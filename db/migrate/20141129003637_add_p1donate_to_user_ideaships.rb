class AddP1donateToUserIdeaships < ActiveRecord::Migration
  def change
    add_column :user_ideaships, :p1donate, :integer
  end
end
