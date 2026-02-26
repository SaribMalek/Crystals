<?php

namespace App\Entity;

use App\Repository\AdminActivityLogRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AdminActivityLogRepository::class)]
#[ORM\Table(name: 'admin_activity_log')]
class AdminActivityLog
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(onDelete: 'SET NULL', nullable: true)]
    private ?User $user = null;

    #[ORM\Column(length: 180)]
    private ?string $email = null;

    #[ORM\Column(length: 120, nullable: true)]
    private ?string $route_name = null;

    #[ORM\Column(length: 10)]
    private ?string $http_method = null;

    #[ORM\Column(length: 255)]
    private ?string $path = null;

    #[ORM\Column(length: 45, nullable: true)]
    private ?string $ip_address = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $user_agent = null;

    #[ORM\Column(length: 160, nullable: true)]
    private ?string $activity_type = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = strtolower(trim($email));

        return $this;
    }

    public function getRouteName(): ?string
    {
        return $this->route_name;
    }

    public function setRouteName(?string $route_name): static
    {
        $this->route_name = $route_name;

        return $this;
    }

    public function getHttpMethod(): ?string
    {
        return $this->http_method;
    }

    public function setHttpMethod(string $http_method): static
    {
        $this->http_method = strtoupper(trim($http_method));

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(string $path): static
    {
        $this->path = $path;

        return $this;
    }

    public function getIpAddress(): ?string
    {
        return $this->ip_address;
    }

    public function setIpAddress(?string $ip_address): static
    {
        $this->ip_address = $ip_address;

        return $this;
    }

    public function getUserAgent(): ?string
    {
        return $this->user_agent;
    }

    public function setUserAgent(?string $user_agent): static
    {
        $this->user_agent = $user_agent;

        return $this;
    }

    public function getActivityType(): ?string
    {
        return $this->activity_type;
    }

    public function setActivityType(?string $activity_type): static
    {
        $this->activity_type = $activity_type;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): static
    {
        $this->created_at = $created_at;

        return $this;
    }
}

