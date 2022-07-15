import request from '../utils/request'

export function getEquipmentCount ( params ) {
  return request.post('/cdz/getEquipmentCount', 
  params
  )
}