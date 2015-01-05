class AddWechatidToUsers < ActiveRecord::Migration
  def change
    add_column :users, :wechatid, :string
  end
end
