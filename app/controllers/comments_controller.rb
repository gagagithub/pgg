class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  # GET /comments
  # GET /comments.json
  def index
    @comments = Comment.all
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
  end

  # GET /comments/new
  def new
    @comment = Comment.new
  end

  # GET /comments/1/edit
  def edit
  end

  def zan

    @comment = Comment.find(params[:id])

    @changjingzan = Changjingzan.new
    @changjingzan.user_id = current_user.id
    @changjingzan.idea_id = @comment.idea_id
    @changjingzan.comments_id = @comment.id
    @changjingzan.zan = 1
    @changjingzan.save

    redirect_to @comment.idea

  end

  def unzan
    @comment = Comment.find(params[:id])


    @changjingunzan = Changjingzan.where(user_id:current_user.id, idea_id:@comment.idea_id, comments_id: @comment.id)

    if (!@changjingunzan.empty?)
      @changjingunzan.first.destroy
    end

    redirect_to @comment.idea

  end

  # POST /comments
  # POST /comments.json
  def create
    @comment = Comment.new(comment_params)

    respond_to do |format|
      if @comment.save
#        format.html { redirect_to @comment, notice: 'Comment was successfully created.' }
        format.html { redirect_to @comment.idea, notice: '新建应用场景成功！' }
        format.json { render :show, status: :created, location: @comment }
      else
        format.html { render :new }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    respond_to do |format|
      if @comment.update(comment_params)
        format.html { redirect_to @comment, notice: 'Comment was successfully updated.' }
        format.json { render :show, status: :ok, location: @comment }
      else
        format.html { render :edit }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to comments_url, notice: 'Comment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:user_id, :idea_id, :body)
    end
end
