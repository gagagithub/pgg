require 'rails_helper'

RSpec.describe "ideas/index", :type => :view do
  before(:each) do
    assign(:ideas, [
      Idea.create!(
        :user_id => 1,
        :intro => "Intro",
        :customer_segments => "MyText",
        :customer_relationships => "MyText",
        :value_proposition => "MyText",
        :key_activities => "MyText",
        :key_partners => "MyText",
        :channels => "MyText",
        :key_resources => "MyText",
        :revenue_streams => "MyText",
        :cost_structure => "MyText"
      ),
      Idea.create!(
        :user_id => 1,
        :intro => "Intro",
        :customer_segments => "MyText",
        :customer_relationships => "MyText",
        :value_proposition => "MyText",
        :key_activities => "MyText",
        :key_partners => "MyText",
        :channels => "MyText",
        :key_resources => "MyText",
        :revenue_streams => "MyText",
        :cost_structure => "MyText"
      )
    ])
  end

  it "renders a list of ideas" do
    render
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Intro".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end
