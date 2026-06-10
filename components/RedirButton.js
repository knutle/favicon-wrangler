import { useCallback, useState } from 'react'
import Button from './Button'
import styles from '../styles/home.module.css'

export default function RedirButton() {
  const redir = useCallback(() => {
    window.location = "https://google.com"
  })

  return <Button onClick={redir}>Go to site</Button>
}
