class AssetsController < ApplicationController
  before_filter :load_attachable
  def create
    @asset = @attachable.assets.new(params[:asset])
    if @asset.save
      respond_to do |format|
        format.json { render json: @asset }
      end
    else
      render :json => { :errors => @asset.errors.full_messages }
    end
  end
  
  private
    def load_attachable
      resource, id = request.path.split('/')[1,2]
      @attachable = resource.singularize.classify.constantize.find(id)
    end
end
