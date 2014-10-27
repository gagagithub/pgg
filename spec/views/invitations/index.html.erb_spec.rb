require 'rails_helper'

RSpec.describe "invitations/index", :type => :view do
  before(:each) do
    assign(:invitations, [
      Invitation.create!(
        :sender_id => 1,
        :recipient_email => "Recipient Email",
        :token => "Token",
        :new => "New"
      ),
      Invitation.create!(
        :sender_id => 1,
        :recipient_email => "Recipient Email",
        :token => "Token",
        :new => "New"
      )
    ])
  end

  it "renders a list of invitations" do
    render
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Recipient Email".to_s, :count => 2
    assert_select "tr>td", :text => "Token".to_s, :count => 2
    assert_select "tr>td", :text => "New".to_s, :count => 2
  end
end
