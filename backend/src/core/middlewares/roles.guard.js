export function requireRole(...allowedRoles) {
  return (req, res, next) => {
    const role = req.user?.role;
    if (!role) return res.status(401).json({ message: "unauthenticated" });
    if (!allowedRoles.includes(role)) return res.status(403).json({ message: "forbidden" });
    next();
  };
}
