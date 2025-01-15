'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

// Helper function to format time in HH:MM:SS
function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
}

// Main component
export default function TaskManager() {
  // State to store tasks
  const [tasks, setTasks] = useState<Array<{ name: string; time: number; isRunning: boolean }>>([])
  // State for the new task input
  const [newTask, setNewTask] = useState('')

  // Effect to update time for running tasks
  useEffect(() => {
    const timer = setInterval(() => {
      setTasks(currentTasks =>
        currentTasks.map(task =>
          task.isRunning ? { ...task, time: task.time + 1 } : task
        )
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { name: newTask, time: 0, isRunning: false }])
      setNewTask('')
    }
  }

  // Function to toggle task timer
  const toggleTimer = (index: number) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, isRunning: !task.isRunning } : task
    ))
  }

  // Function to remove a task
  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-4">Simple Task Manager</h1>
          
          {/* Input for adding new tasks */}
          <div className="flex mb-4">
            <Input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter task name"
              className="flex-grow mr-2"
            />
            <Button onClick={addTask}>Add Task</Button>
          </div>

          {/* List of tasks */}
          <div className="space-y-4">
            {tasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-100 rounded">
                <div>
                  <h3 className="font-semibold">{task.name}</h3>
                  <p className="text-sm text-gray-600">{formatTime(task.time)}</p>
                </div>
                <div>
                  <Button onClick={() => toggleTimer(index)} className="mr-2">
                    {task.isRunning ? 'Stop' : 'Start'}
                  </Button>
                  <Button onClick={() => removeTask(index)} variant="destructive">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Total time for all tasks */}
          <div className="mt-4 text-right">
            <strong>Total Time:</strong> {formatTime(tasks.reduce((total, task) => total + task.time, 0))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

