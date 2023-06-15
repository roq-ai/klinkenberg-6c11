const mapping: Record<string, string> = {
  appointments: 'appointment',
  calendars: 'calendar',
  instructors: 'instructor',
  prices: 'price',
  schools: 'school',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
