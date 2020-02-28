class Api::V1::DeviseController < ApplicationController
  def show
    if current_user
      render json: current_user
    else
      render json: "error: not authenticated"
    end
  end
end
