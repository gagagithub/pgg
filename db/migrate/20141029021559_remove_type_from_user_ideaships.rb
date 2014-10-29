class RemoveTypeFromUserIdeaships < ActiveRecord::Migration
  def change
    remove_column :user_ideaships, :type, :integer
  end
end
