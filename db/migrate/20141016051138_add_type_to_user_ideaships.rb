class AddTypeToUserIdeaships < ActiveRecord::Migration
  def change
    add_column :user_ideaships, :type, :integer
  end
end
