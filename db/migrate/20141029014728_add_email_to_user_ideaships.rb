class AddEmailToUserIdeaships < ActiveRecord::Migration
  def change
    add_column :user_ideaships, :email, :string
  end
end
