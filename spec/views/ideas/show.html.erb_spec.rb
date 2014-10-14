require 'rails_helper'

RSpec.describe "ideas/show", :type => :view do
  before(:each) do
    @idea = assign(:idea, Idea.create!(
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
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/1/)
    expect(rendered).to match(/Intro/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
  end
end
