class RemoveNewFromInvitations < ActiveRecord::Migration
  def change
    remove_column :invitations, :new, :string
  end
end
