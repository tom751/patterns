---
path: repository
title: Repository
date: 2020-03-18T11:36:19.375Z
---
# What it is

Abstraction that separates the layer that communicates with the database to do CRUD operations or custom search queries.

You can create a generic repository with standard methods such as getById, remove, add. The generic will be the entity class that is associated with a table in the database.

If you need a specific query you can extend the generic repository and add methods to do this. 

# Example

## Generic repository

```csharp
public class Repository<T> : IRepository<T>
  where T : Entity
{
  private ApplicationDbContext _dbContext;
  
  public Repository(ApplicationDbContext dbContext)
  {
    _dbContext = dbContext;
  }
  
  public T GetById(Guid id)
  {
    return _dbContext.Set<t>().FirstOrDefault(x => x.Id == id);
  }
  
  // other common methods below
}
```

## Custom repository for entity

```csharp
public interface IUserRepository : IRepository<User>
{
  IQueryable<User> GetActive();
}

public class UserRepository: IUserRepository
{
  public IQueryable<User> GetActive()
  {
    // implementation here
  }
}
```
