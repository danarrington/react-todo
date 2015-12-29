class TodosController < ApplicationController

  def index
    @todos = Todo.all

    respond_to do |format|
      format.html #index.html.slim
      format.json { render json: @todos }
    end
  end

  def create
    Todo.create(title: params[:title])
    respond_to do |format|
      format.json {head :ok}
    end
  end
end
