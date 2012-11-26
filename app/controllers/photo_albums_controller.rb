class PhotoAlbumsController < ApplicationController
before_filter :find_photo_album, only: [:edit, :update, :show, :destroy]
  def index
    @photo_albums = PhotoAlbum.all
  end

  def new
    @photo_album = PhotoAlbum.new
  end

  def create
    @photo_album = PhotoAlbum.new(params[:photo_album])
    if @photo_album.save
      redirect_to photo_album_path(@photo_album)
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @photo_album.update_attributes(params[:photo_albums])
      redirect_to photo_album_path(@photo_album)
    else
      render 'edit'
    end
  end

  def show
    @attachable = @photo_album
    @assets = @attachable.assets
  end

  def destroy
    @photo_album.destroy
  end

  private
    def find_photo_album
      @photo_album = PhotoAlbum.find(params[:id])
    end
end
