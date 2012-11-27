class AssetsController < ApplicationController
  before_filter :load_attachable
  before_filter :find_asset, only: :destroy
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
  
  def destroy
    @asset.destroy
    respond_to do |format|
      format.js
    end
  end
  
  private
    def load_attachable
      resource, id = request.path.split('/')[1,2]
      @attachable = resource.singularize.classify.constantize.find(id)
    end
    
    def find_asset
      @asset = Asset.find(params[:id])
      
    end
end
