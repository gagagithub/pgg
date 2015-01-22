class AddWeixincodeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :weixincode, :string
  end
end
