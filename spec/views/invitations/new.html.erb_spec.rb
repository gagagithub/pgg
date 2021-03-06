require 'rails_helper'

RSpec.describe "invitations/new", :type => :view do
  before(:each) do
    assign(:invitation, Invitation.new(
      :sender_id => 1,
      :recipient_email => "MyString",
      :token => "MyString",
      :new => "MyString"
    ))
  end

  it "renders new invitation form" do
    render

    assert_select "form[action=?][method=?]", invitations_path, "post" do

      assert_select "input#invitation_sender_id[name=?]", "invitation[sender_id]"

      assert_select "input#invitation_recipient_email[name=?]", "invitation[recipient_email]"

      assert_select "input#invitation_token[name=?]", "invitation[token]"

      assert_select "input#invitation_new[name=?]", "invitation[new]"
    end
  end
end
