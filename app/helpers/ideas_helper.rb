module IdeasHelper
      # 返回idea的owner user.
    def ideaowner(idea)
      @ideaowner = idea.user_ideaships.where(relationtype:0).first
    end

  # 返回idea的follow user.
    def ideafollowers(idea)
      @ideafollowers = idea.user_ideaships.where(relationtype:1)
    end

  # 返回idea的投资人.
    def ideastakeholders(idea)
      @ideastakeholders = idea.user_ideaships.where(relationtype:1,p1donate:300)
    end
    
end
