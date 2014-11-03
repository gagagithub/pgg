class InvitationsController < ApplicationController
  before_action :set_invitation, only: [:show, :edit, :update, :destroy]

  # GET /invitations
  # GET /invitations.json


  # GET /invitations/new
  def new
    @invitation = Invitation.new
  end


  # POST /invitations
  # POST /invitations.json
  def create
    @invitation = Invitation.new(invitation_params)
    @invitation.sender = current_user

#    respond_to do |format|
      if @invitation.save

        if signed_in?
            UserMailer.invitation(@invitation, signup_url(@invitation.token)).deliver

            format.html { redirect_to current_user, notice: 'Thank you, invitation sent.' }
            format.json { render :show, status: :created, location: @invitation }
        else
            flash[:notice] ="申请已接受，一旦受理将及时邮件反馈您!"
            redirect_to root_path
        end          


      else
        format.html { render :new }
        format.json { render json: @invitation.errors, status: :unprocessable_entity }
      end
#    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_invitation
      @invitation = Invitation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def invitation_params
      params.require(:invitation).permit(:sender_id, :recipient_email, :token, :sent_at, :new)
    end
end
