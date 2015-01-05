class AddAlipayidToUsers < ActiveRecord::Migration
  def change
    add_column :users, :alipayid, :string
  end
end
