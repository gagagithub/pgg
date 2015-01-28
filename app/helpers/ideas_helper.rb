module IdeasHelper
      # 返回idea的owner user.
    def ideaowner(idea)
      @ideaowner = idea.user_ideaships.where(relationtype:0).first
    end

  def user_is_ideaowner(idea,user)
    user.id == ideaowner(idea).user_id
  end

  def user_is_ideaparter(idea,user)
    idea.user_ideaships.where(user_id:user.id, relationtype:1 ,p1donate:300)
  end

  def user_is_ideaseniorparter(idea,user)
    idea.user_ideaships.where(user_id:user.id, relationtype:1 ,p2donate:3000)
  end

  # 返回idea的follow user.
  def ideafollowers(idea)
      @ideafollowers = idea.user_ideaships.where(relationtype:1)
  end

  # 返回idea的投资人.
  def ideastakeholders(idea)
      @ideastakeholders = idea.user_ideaships.where(relationtype:1,p1donate:300)
  end

  def ideaseniorstakeholders(idea)
      @ideaseniorstakeholders = idea.user_ideaships.where(relationtype:1,p2donate:3000)
  end

  def idea_stage(idea)
      #募集初级合伙人中
      if (ideastakeholders(idea).count < 9)
        return 1
      #募集中级合伙人中  
      else
        if (ideaseniorstakeholders(idea).count <10)
          return 2
        else
      #募集高级合伙人中   
          return 3
        end
      end
  end

  def idea_user_type(idea)

      if(idea_stage(idea)==1)
        return 1 if (user_is_ideaowner(idea,current_user))
        return 2 if (user_is_ideaparter(idea,current_user))
        return 3 if (user_is_ideaseniorparter(idea,current_user))
        return 4
      end

      if(idea_stage(idea)==2)
        return 5 if (user_is_ideaowner(idea,current_user))
        return 6 if (user_is_ideaparter(idea,current_user))
        return 7 if (user_is_ideaseniorparter(idea,current_user))
        return 8
      end

      if(idea_stage(idea)==3)
        return 9 if (user_is_ideaowner(idea,current_user))
        return 10 if (user_is_ideaparter(idea,current_user))
        return 11 if (user_is_ideaseniorparter(idea,current_user))
        return 12
      end

  end



    
end
