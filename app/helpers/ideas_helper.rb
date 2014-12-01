module IdeasHelper
      # 返回idea的owner user.
    def ideaowner(idea)
      @ideaowner = idea.user_ideaships.where(relationtype:0).first
    end

  # 返回idea的follow user.
    def ideafollowers(idea)
      @ideafollowers = idea.user_ideaships.where(relationtype:1)
    end
    
end
