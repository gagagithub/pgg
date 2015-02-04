class AddWeixinqunToIdeas < ActiveRecord::Migration
  def change
    add_column :ideas, :weixinqun, :string
  end
end
