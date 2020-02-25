class Api::V1::RecipesController < ApplicationController
  def index
    set_recipes
    render json: @recipes
  end

  def create
    recipe = Recipe.create!(recipe_params)
    if recipe
      render json: recipe
    else
      render json: recipe.errors
    end
  end

  def show
    if set_recipe
      render json: @recipe
    else
      render json: @recipe.errors
    end
  end

  def destroy
    set_recipe&.destroy
    render json: { message: 'Recipe deleted!' }
  end

  private
  def recipe_params
    params.permit(:name, :image, :ingredients, :instruction)
  end

  def set_recipe
    @recipe ||= Recipe.find(params[:id])
  end

  def set_recipes
    @recipes ||= Recipe.all.order(created_at: :desc)
  end
end
