module Api
  # Api V1 for shops
  class V1::ShopsController < ApplicationController
    before_action :authenticate_user!
    before_action :shop, only: [:update, :destroy, :show]

    def index
      data = current_user.shops.all
      render json: data, status: :ok
    end

    def create
      data = current_user.shops.new(shop_params)
      if data.save
        render json: data, status: :created
      else
        render json: data.errors, status: :unprocessable_entity
      end
    end

    def show
      render json: @data
    end

    def update
      if @data.update(shop_params)
        head :no_content
      else
        render json: @data.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @data.destroy
      head :no_content
    end

    private

    def shop
      @data = current_user.shops.find_by(slugs: params[:id])
    end

    def shop_params
      params.permit(:name, :description, :image)
    end
  end
end
