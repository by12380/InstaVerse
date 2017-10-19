using System;

public class ScriptureNotFoundException : Exception
{
    public ScriptureNotFoundException()
    {
    }

    public ScriptureNotFoundException(string message)
        : base(message)
    {
    }

    public ScriptureNotFoundException(string message, Exception inner)
        : base(message, inner)
    {
    }
}