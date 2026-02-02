export function automationAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.replace("Bearer ", "");
    if (!token || token !== process.env.AUTOMATION_TOKEN) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
}
//# sourceMappingURL=automationAuth.js.map