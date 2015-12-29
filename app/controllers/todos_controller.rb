class TodosController < ApplicationController

  def index
    @todos = Todo.all

    respond_to do |format|
      format.html #index.html.slim
      format.json { render json: @todos }
    end
  end
end
