/**
 * Date formatting pinned to a fixed locale and UTC.
 *
 * Both matter: an unpinned locale renders differently on the server and in the
 * visitor's browser and trips a hydration mismatch, and an unpinned timezone can
 * shift a date across a day boundary depending on where the build ran.
 */
export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`))
}
