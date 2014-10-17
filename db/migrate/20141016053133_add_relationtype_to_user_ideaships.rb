class AddRelationtypeToUserIdeaships < ActiveRecord::Migration
  def change
    add_column :user_ideaships, :relationtype, :integer
  end
end
