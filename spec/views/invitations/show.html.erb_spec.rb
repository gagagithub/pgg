require 'rails_helper'

RSpec.describe "invitations/show", :type => :view do
  before(:each) do
    @invitation = assign(:invitation, Invitation.create!(
      :sender_id => 1,
      :recipient_email => "Recipient Email",
      :token => "Token",
      :new => "New"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/1/)
    expect(rendered).to match(/Recipient Email/)
    expect(rendered).to match(/Token/)
    expect(rendered).to match(/New/)
  end
end
